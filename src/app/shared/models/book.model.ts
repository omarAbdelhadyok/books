export class Book {
    id: string;
    created: Date;
    updated: Date;
    userId: string;
    categoryId: string;
    title: string;
    description: string;
    author: string;
    image_url: string;
    pdf_url: string;
    publish_year?: number;
    national_id?: string;
}