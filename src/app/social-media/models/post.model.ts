export class Post {
    id!: number;
    userId!: number;
    title!: string;
    createdDate!: Date;
    content!: string;
    comments!: Comment[];
    imageUrl!: string;
}