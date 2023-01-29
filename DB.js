export const DB = [
    {
        p_key: "CONFIG",
        s_key: "main",
        data: {
            unis: [
                {
                    uni: "STG",
                    urlPrefix: "https://stg.com",
                    studentUrl: "https://{STUDENT_NUMBER}.stg.com",
                    adminLink: "https://admin-{ADMIN_NUMBER}.stg.com",
                },
                {
                    uni: "OI",
                    urlPrefix: "https://oi.com",
                    studentUrl: "https://{STUDENT_NUMBER}.oi.com",
                    adminLink: "https://admin-{ADMIN_NUMBER}.oi.com",
                },
            ],
        },
    },

    { p_key: "STG#CONFIG", university_name: "Staging" },
    { p_key: "OI#CONFIG", university_name: "Oxford international" },

    { p_key: "STG#1000", s_key: "STUDENT_DETAILS", data: { name: "name - 1" } },
    { p_key: "OI#2000", s_key: "STUDENT_DETAILS", data: { name: "name - 2" } },
    { p_key: "STG#4000", s_key: "STUDENT_DETAILS", data: { name: "name - 4" } },
    { p_key: "STG#5000", s_key: "STUDENT_DETAILS", data: { name: "name - 5" } },

    { p_key: "STG#1000", s_key: "FINANCE", data: { deposit: 200 } },
    { p_key: "OI#2000", s_key: "FINANCE", data: { deposit: 400 } },
    { p_key: "STG#4000", s_key: "FINANCE", data: { deposit: 700 } },
    { p_key: "STG#5000", s_key: "FINANCE", data: { deposit: 100 } },

    { p_key: "OI#MANAGER", s_key: "main", hasAccess: ["2000"] },
    { p_key: "STG#MANAGER", s_key: "main", hasAccess: ["4000"] },

    { p_key: "STG#1000", s_key: "USER#STUDENT" },
    { p_key: "OI#2000", s_key: "USER#STUDENT" },
    { p_key: "ADM#STG#3000", s_key: "USER#ADMIN" },
    { p_key: "STG#4000", s_key: "USER#STUDENT" },
    { p_key: "STG#5000", s_key: "USER#STUDENT" },
    { p_key: "ADM#OI#6000", s_key: "USER#ADMIN" },
];
