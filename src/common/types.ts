export type ResponseType = [
    {
        easyMode: modeType,
    },
    {
        normalMode: modeType,
    },
    {
        hardMode: modeType
    }
]

type modeType = {
    field: number
}
