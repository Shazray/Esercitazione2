export class MenuItem{
    id: string;
    description: string;
    selected: boolean;
    url: string;
    constructor(id: string, description: string, url: string, selected = false){
        this.id = id;
        this.description = description;
        this.selected = selected;
        this.url = url;
    }
}