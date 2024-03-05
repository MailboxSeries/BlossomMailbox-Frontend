export interface ILetter {
    id?: number,
    reply : boolean, // 답장인지 아닌지
    sender : string, 
}

export interface ILetterList {
    letters: ILetter[];
}