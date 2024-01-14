export class JsonContent{
    subjects:Subject|undefined;
}

export interface Subject{
    css:Video[];
    javascript:Video[];
}

export interface Video{
    title:string;
    url:string;
}