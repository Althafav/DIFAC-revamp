
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Mon Jun 24 2024 09:31:20 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Partneritem extends ContentItem {
    public name!: Elements.TextElement;
    public link!: Elements.TextElement;
    public image!: Elements.AssetsElement;
    public content!: Elements.RichTextElement;
    public items!: Elements.LinkedItemsElement<ContentItem>;
}
