
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Mon Feb 26 2024 10:52:15 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Partneritem extends ContentItem {
    public name!: Elements.TextElement;
    public logo!: Elements.AssetsElement;
    public website!: Elements.TextElement;
    public showOnHomePage!: Elements.NumberElement;
    public partnerType!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'show_on_home_page') {
                    return 'showOnHomePage';
                }
                if (elementName === 'partner_type') {
                    return 'partnerType';
                }
                return elementName;
            })
        });
    }
}
