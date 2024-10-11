
export const mockToken = 'eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7Im9yZ2FuaXNhdGlvbiI6eyJpZCI6MTE5OSwicGFyZW50SWQiOm51bGwsImN1c3RvbWVySWQiOiI0ZjBmMzg0Mi1lZGExLTVhZDctZGYzOC0wYzE5ODQzMTI3ZGYiLCJjdXN0b21lckNoaWxkSWQiOm51bGwsIm5hbWUiOiJtZWdhbGl0aCIsIm5pY2tOYW1lIjoibWVnYWxpdGgiLCJpc1Jvb3QiOnRydWUsInRpbWV6b25lIjoiQXVzdHJhbGlhL01lbGJvdXJuZSJ9LCJpc01hY2hpbmVUb2tlbiI6dHJ1ZSwicmVmZXJyZXIiOm51bGwsInBlcm1pc3Npb25zIjpbImNyZWF0ZTo6YXBwbGljYW50IiwidXBkYXRlOjphcHBsaWNhbnQ6cmVmZXJlbmNlOnRlc3QxQGFiYy5jb20iLCJ2aWV3OjphcHBsaWNhbnQ6cmVmZXJlbmNlOnRlc3QxQGFiYy5jb20iLCJsaXN0OjphcHBsaWNhbnQ6cmVmZXJlbmNlOnRlc3QxQGFiYy5jb20iLCJmZnBvcnRhbF90cmlnZ2VyX2V4dGVybmFsX2lkdiIsImZmcG9ydGFsX2FwcGxpY2FudF9taWR2X3VwbG9hZCIsImZmcG9ydGFsX2FwcGxpY2FudF9tYW51YWxfa3ljX3VwZGF0ZSIsImxpc3Q6OmFkZHJlc3MiLCJjcmVhdGU6OmV2ZW50Il0sInNlc3Npb25JZCI6IjZhNmI1MzViLTY1ODktNGVmNy04ODg5LWM4ZWQwN2NkOGI3OSIsImVudmlyb25tZW50IjoiaHR0cHM6Ly9iYWNrZW5kLmt5Y2FtbC51YXQuZnJhbmtpZWZpbmFuY2lhbC5pbyIsInJlZmVyZW5jZSI6InRlc3QxQGFiYy5jb20iLCJleHRyYURhdGEiOm51bGx9LCJleHAiOjE3MjcxNTMyODh9.kANpqTB2tbC6dO8dn6fKigatiy5PEYAMZT_pjStpP1I'

export const mockSearchResults = [
    {
        "Addresses": {
            "Addresses": [
                {}
            ]
        },
        "Code": "26.692.9390001-58",
        "CompanyID": "26.692.9390001-58",
        "Name": "Soccer Esporte & Calcados LTDA"
    }
]

export const mockCountry = 'BR'

export const mockRequestId = '01J8J8DW8DMBZMNB50ERRWTKPZ';

export const mockEntityId = '37a6ec13-f04e-1359-033f-2111011d0f5b';

export const mockSelectedBusiness = {
    "Addresses": {
        "Addresses": [
            {}
        ]
    },
    "Code": "26.692.9390001-58",
    "CompanyID": "26.692.9390001-58",
    "Name": "Soccer Esporte & Calcados LTDA"
}

export const mockKybStep = 3

export const mockAvailableReportsRaw = [
    {
        "availableFormats": "PDF",
        "provider": "kyckr",
        "reportCode": "BRON_QlJfQ29tcGFueVByb2ZpbGU=_MjYuNjkyLjkzOTAwMDEtNTg=_QlJfRUNQ",
        "reportTitle": "Company Profile",
        "priceTierCode": "C"
    },
    {
        "availableFormats": "PDF",
        "provider": "kyckr",
        "reportCode": "ROWOFF_QlJfQ1A=_Q29tcHJvdmFudGUgZGUgSW5zY3Jpw6fDo28gZSBkZSBTaXR1YcOnw6NvIENhZGFzdHJhbA==_MjYuNjkyLjkzOTAwMDEtNTg=___MS8xLzAwMDEgMTI6MDA6MDAgQU0=_aHR0cHM6Ly9zb2x1Y29lcy5yZWNlaXRhLmZhemVuZGEuZ292LmJyL1NlcnZpY29zL2NucGpyZXZhL0NucGpyZXZhX1NvbGljaXRhY2FvLmFzcA==_S1lDT04=_QlJfQ1A=",
        "reportTitle": "Comprovante de Inscrição e de Situação Cadastral",
        "priceTierCode": "D"
    },
    {
        "availableFormats": "PDF",
        "provider": "kyckr",
        "reportCode": "ROWOFF_QlJfRUNQ_Q29tcHJvdmFudGUgZGUgSW5zY3Jpw6fDo28gZSBkZSBTaXR1YcOnw6NvIENhZGFzdHJhbCArIFF1YWRybyBkZSBTw7NjaW9zIGUgQWRtaW5pc3RyYWRvcmVz_MjYuNjkyLjkzOTAwMDEtNTg=___MS8xLzAwMDEgMTI6MDA6MDAgQU0=_aHR0cHM6Ly9zb2x1Y29lcy5yZWNlaXRhLmZhemVuZGEuZ292LmJyL1NlcnZpY29zL2NucGpyZXZhL0NucGpyZXZhX1NvbGljaXRhY2FvLmFzcA==_S1lDT04=_QlJfRUNQ",
        "reportTitle": "Comprovante de Inscrição e de Situação Cadastral + Quadro de Sócios e Administradores",
        "priceTierCode": "E"
    }
]

export const mockAvailableReports = mockAvailableReportsRaw.map((report) => ({
    ...report,
    status: 'idle'
}))
