
import {ElementFinder, element ,by} from "protractor";
export class angularHomePageObjects
{
    
    headerText:ElementFinder;
    search:ElementFinder;


    constructor()
    {
       
        this.headerText=element(by.linkText("angular.io"));
        this.search=element(by.css("input[type='search']"));
       
    }
}