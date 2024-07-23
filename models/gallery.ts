
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Wed Jun 05 2024 16:37:36 GMT+0500 (Pakistan Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Gallery extends ContentItem {
    public pageTitle!: Elements.TextElement;
    public heading!: Elements.TextElement;
    public subHeading!: Elements.TextElement;
    public items!: Elements.LinkedItemsElement<ContentItem>;
    public metaTitle!: Elements.TextElement;
    public metaDescription!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'page_title') {
                    return 'pageTitle';
                }
                if (elementName === 'sub_heading') {
                    return 'subHeading';
                }
                if (elementName === 'meta_title') {
                    return 'metaTitle';
                }
                if (elementName === 'meta_description') {
                    return 'metaDescription';
                }
                return elementName;
            })
        });
    }
}
