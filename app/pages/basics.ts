import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { BaseModel } from './base';

export class BasicsModel extends BaseModel {

}

export function navigatingTo(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = new BasicsModel(page);
}