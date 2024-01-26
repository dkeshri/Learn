export interface GithubFile{
    content:string;
    url:string;
    path:string;
    sha:string;
}

export interface GitCommitFile{
    message:string;
    committer:GitCommitter;
    content:string;
    sha:string;
    branch:string;
}

export interface GitCommitter{
    name:string;
    email:string;
}