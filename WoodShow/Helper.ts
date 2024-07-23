import Globals from "../WoodShow/Globals";

export default class formatParameter {
  static formatUrlParameter = (name: any) => {
    debugger
    name = name.replace(/ /g, "-");
    name = name.replace(/[?.:,"'’/()%]/g, "");
    name = name.toLowerCase();
    return name;
  };

  static removeDuplicate = (name: any) => {
    name = name.replaceAll("(", "");
    name = name.replaceAll(")", "");
    return name;
  };

  static getUploadFile = (image: any) => {
    var file;
    if (image) {
      file = image.files[0];
    }
    return file;
  };

  static formatLink = (link: string) => {
    if (link != "") {
      if (link == "#" || link == "javascript:0") {
        return "javascript:0";
      }
      else {
        if (link.includes("https")) {
          return link;
        }
        else if (link == "/") {
          return link;
        }
        else {
          return `${Globals.BASE_URL}${link}`
        }
      }

    }

    return link;
  };

  
  static getLanguageName(current: string): string {
    if (current === "en-US") {
      return "default";
    } else if (current === "ar-AE") {
      return "arabic";
    } else {
      return "default";
    }
  }

  static getLanguageCode(): string {
    const storageItem = localStorage.getItem(Globals.LANG_COOKIE);
    if (storageItem) {
      var getLanguage = JSON.parse(storageItem);
      return getLanguage["language_code"];
    }
    else {
      this.setLanguage("en-US");
      return "en-US";
    }

  };

  static setLanguage(code: string): string {
    if(code){
      const LanguageModel = {
        language_code: code,
      };
  
      localStorage.removeItem(Globals.LANG_COOKIE);
      localStorage.setItem(Globals.LANG_COOKIE, JSON.stringify(LanguageModel));
    }
    return code
  }

  static serializeArray(form: any) {
    var field,
      l,
      s = [];
    if (typeof form == "object" && form.nodeName == "FORM") {
      var len = form.elements.length;
      for (var i = 0; i < len; i++) {
        field = form.elements[i];
        if (
          field.name &&
          !field.disabled &&
          field.type != "file" &&
          field.type != "reset" &&
          field.type != "submit" &&
          field.type != "button"
        ) {
          if (field.type == "select-multiple") {
            l = form.elements[i].options.length;
            var j: number;
            for (j = 0; j < l; j++) {
              if (field.options[j].selected)
                s.push({
                  name: field.name,
                  value: field.options[j].value,
                });
            }
          } else if (
            (field.type != "checkbox" && field.type != "radio") ||
            field.checked
          ) {
            s.push({ name: field.name, value: field.value });
          }
        }
      }
    }
    return s;
  }
}
