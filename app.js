import {DB} from "./DB.js";

const getAllUsersByUni = (uni) => {
    const  univercity = {shortCode: uni};

    const name = DB.find(item=> item.p_key === (`${uni}#CONFIG`));  if(!name)return console.log('напиши нормально, додик')
    univercity.uni = name.university_name;

    const unis = DB[0].data.unis.find(item=> (item.uni === uni))
    univercity.uniUrl = unis.urlPrefix

    // console.log(unis);
    univercity.students = DB.filter(item=>(item.p_key.includes(uni) && item.s_key === "STUDENT_DETAILS")).map(item=>{
        
        const split = item.p_key.split('#');
        const finance = DB.find(item=> (item.p_key.includes(split[1]) && item.s_key === 'FINANCE'))
        
        const student = {
            studentNumber: split[1],
            uni: uni,
            name: item.data.name,
            deposit: finance.data.deposit,
            studentUrl: unis.studentUrl.replace('{STUDENT_NUMBER}',split[1])
        }
        return student;
    })
    
    const admins = DB.filter(item=>(item.p_key.includes(`ADM#${uni}`))).map(item=>{
        const split = item.p_key.split('#')
        const access = DB.filter(item=>(item.hasAccess && item.p_key.includes(uni))).map(item=>{
            return (item.hasAccess[0])
        })

        const admin ={
            id: split[2],
            link: unis.adminLink.replace('{ADMIN_NUMBER}',split[2]),
            students: univercity.students.filter(item=> (item.studentNumber === access[0])).map(item=>{
                const res = {
                    studentNumber: item.studentNumber,
                    studentUrl: item.studentUrl,
                }
                return res;
            }),
        }
        return admin
    })

    univercity.admins = {
        shortCode: 'ADM',
        list: admins
    }
    
    return univercity
};


const stgUsers = getAllUsersByUni('STG');
console.log(stgUsers);


