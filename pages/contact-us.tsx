import Head from "next/head";
import React from "react";
import Globals from "../WoodShow/Globals";
import Link from "next/link";
import ContentMainComponent from "../components/ContentMainComponent";
import JsLoader from "../WoodShow/JsLoader";

export default class startupPage extends React.Component<
    {},
    {
    }
> {
    constructor(props: any) {
        super(props);
    }

    checkRegisteredEmail() {
        var email = $(".field_email").val();
        var confirmEmail = $("#confirmEmail").val();
        if (email != confirmEmail) {
            $("#confirmEmailError").css("display", "block");
            $("#emailValidate").prop("checked", false);
        }
        else {
            $("#confirmEmailError").css("display", "none");
            $("#emailValidate").prop("checked", true);
        }
    }

    getName() {
        var thankyou = $("#message").html();
        thankyou = thankyou.replace("[name]", "<span id='UserName'></span>");
        $("#message").html(thankyou);
        var name = $("#firstname").val();
        $("#UserName").html(String(name));
    }

    changeCheckedStatus() {
        if ($('#brochure').prop("checked") == true) {
            $("#field_250Yes").prop("checked", true);
            $("#field_250No").prop("checked", false);
        }
        else if ($('#brochure').prop("checked") == false) {
            $("#field_250Yes").prop("checked", false);
            $("#field_250No").prop("checked", true);
        }


        if ($('#Sponsorship').prop("checked") == true) {
            $("#field_161Yes").prop("checked", true);
            $("#field_161No").prop("checked", false);
        }
        else if ($('#Sponsorship').prop("checked") == false) {
            $("#field_161Yes").prop("checked", false);
            $("#field_161No").prop("checked", true);
        }

        if ($('#newsletter').prop("checked") == true) {
            $("#field_252Yes").prop("checked", true);
            $("#field_252No").prop("checked", false);
        }
        else if ($('#newsletter').prop("checked") == false) {
            $("#field_252Yes").prop("checked", false);
            $("#field_252No").prop("checked", true);
        }
    }
    render(): React.ReactNode {
        try {
            JsLoader.loadFile(`${Globals.BASE_URL}assets/js/interest.js`);
        }
        catch (e) {

        }
        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | Contact us`}</title>
                </Head>

                <ContentMainComponent track="Form" heading="Contact us">
                    <div className="form-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form method="POST" action="//ac.strategic.ae/proc.php" id="_form_404_" className="_form _form_404 _inline-form  _dark" noValidate>
                                        <input type="hidden" name="u" value="404" />
                                        <input type="hidden" name="f" value="404" />
                                        <input type="hidden" name="s" />
                                        <input type="hidden" name="c" value="0" />
                                        <input type="hidden" name="m" value="0" />
                                        <input type="hidden" name="act" value="sub" />
                                        <input type="hidden" name="v" value="2" />
                                        <input type="hidden" name="or" value="3ccb6da66cac56c9077f0e71eb04824c" />
                                        <input id="emailExist" hidden type="checkbox" />
                                        <input id="emailValidate" hidden type="checkbox" />
                                        <input type="hidden" name="field[38]" value="CIFAC 2024 Contact us" />
                                        <div className="_form-content">
                                            <div className="_form_element _x98824631 _full_width ">
                                                <label>First Name*</label>
                                                <div className="_field-wrapper">
                                                    <input type="text" id="firstname" onChange={(e) => {
                                                        this.getName()
                                                    }} name="firstname" className="form-control" placeholder="First Name*" required />
                                                </div>
                                            </div>
                                            <div className="_form_element _x55410165 _full_width ">
                                                <label>Last Name*</label>
                                                <div className="_field-wrapper">
                                                    <input type="text" id="lastname" name="lastname" className="form-control" placeholder=" Last Name*" required />
                                                </div>
                                            </div>

                                            <div className="_form_element _x55410165 _full_width ">
                                                <label>Organization*</label>
                                                <div className="_field-wrapper">
                                                    <input type="text" id="customer_account" name="customer_account" className="form-control" placeholder=" Organization*" required />
                                                </div>
                                            </div>

                                            <div className="_form_element _x55410165 _full_width ">
                                                <label>Email*</label>
                                                <div className="_field-wrapper">
                                                    <input type="text" onChange={(e) => {
                                                        this.checkRegisteredEmail()
                                                    }} id="email" name="email" className="form-control field_email" placeholder=" Email*" required />
                                                </div>
                                            </div>

                                            <div className="_form_element _x55410165 _full_width ">
                                                <label>Confirm Email*</label>
                                                <div className="_field-wrapper">
                                                    <input onChange={(e) => {
                                                        this.checkRegisteredEmail()
                                                    }} id="confirmEmail" type="text" className="form-control" placeholder=" Confirm Email*" required />
                                                </div>
                                                <div className="_error _below" id="confirmEmailError" style={{ display: "none" }}><div className="_error-arrow"></div><div className="_error-inner">Email not match.</div></div>
                                            </div>

                                            <div className="_form_element _x55410165 _full_width ">
                                                <label>Job Title*</label>
                                                <div className="_field-wrapper">
                                                    <input type="text" id="field[23]" name="field[23]" className="form-control field_23" placeholder=" Job Title*" required />
                                                </div>
                                            </div>

                                            <div className="_form_element _x55410165 _full_width ">
                                                <label>Mobile Phone*</label>
                                                <div className="_field-wrapper">
                                                    <input type="text" id="field[12]" name="field[12]" className="form-control field_12" placeholder=" Mobile Phone" />
                                                </div>
                                            </div>

                                            <div className="_form_element _x55410165 _full_width ">
                                                <label>Country*</label>
                                                <div className="_field-wrapper">
                                                    <select name="field[3]" id="field[3]" className="form-control field_3" required>
                                                        <option value="" selected>
                                                            Select Country*
                                                        </option>
                                                        <option value="Afghanistan">
                                                            Afghanistan
                                                        </option>
                                                        <option value="Albania">
                                                            Albania
                                                        </option>
                                                        <option value="Algeria">
                                                            Algeria
                                                        </option>
                                                        <option value="American Samoa">
                                                            American Samoa
                                                        </option>
                                                        <option value="Andorra">
                                                            Andorra
                                                        </option>
                                                        <option value="Angola">
                                                            Angola
                                                        </option>
                                                        <option value="Anguilla">
                                                            Anguilla
                                                        </option>
                                                        <option value="Antarctica">
                                                            Antarctica
                                                        </option>
                                                        <option value="Antigua and Barbuda">
                                                            Antigua and Barbuda
                                                        </option>
                                                        <option value="Argentina">
                                                            Argentina
                                                        </option>
                                                        <option value="Armenia">
                                                            Armenia
                                                        </option>
                                                        <option value="Aruba">
                                                            Aruba
                                                        </option>
                                                        <option value="Australia">
                                                            Australia
                                                        </option>
                                                        <option value="Austria">
                                                            Austria
                                                        </option>
                                                        <option value="Azerbaijan">
                                                            Azerbaijan
                                                        </option>
                                                        <option value="Bahamas">
                                                            Bahamas
                                                        </option>
                                                        <option value="Bahrain">
                                                            Bahrain
                                                        </option>
                                                        <option value="Bangladesh">
                                                            Bangladesh
                                                        </option>
                                                        <option value="Barbados">
                                                            Barbados
                                                        </option>
                                                        <option value="Belarus">
                                                            Belarus
                                                        </option>
                                                        <option value="Belgium">
                                                            Belgium
                                                        </option>
                                                        <option value="Belize">
                                                            Belize
                                                        </option>
                                                        <option value="Benin">
                                                            Benin
                                                        </option>
                                                        <option value="Bermuda">
                                                            Bermuda
                                                        </option>
                                                        <option value="Bhutan">
                                                            Bhutan
                                                        </option>
                                                        <option value="Bolivia">
                                                            Bolivia
                                                        </option>
                                                        <option value="Bosnia and Herzegovina">
                                                            Bosnia and Herzegovina
                                                        </option>
                                                        <option value="Botswana">
                                                            Botswana
                                                        </option>
                                                        <option value="Bouvet Island">
                                                            Bouvet Island
                                                        </option>
                                                        <option value="Brazil">
                                                            Brazil
                                                        </option>
                                                        <option value="British Indian Ocean Territory">
                                                            British Indian Ocean Territory
                                                        </option>
                                                        <option value="Brunei Darussalam">
                                                            Brunei Darussalam
                                                        </option>
                                                        <option value="Bulgaria">
                                                            Bulgaria
                                                        </option>
                                                        <option value="Burkina Faso">
                                                            Burkina Faso
                                                        </option>
                                                        <option value="Burundi">
                                                            Burundi
                                                        </option>
                                                        <option value="Cambodia">
                                                            Cambodia
                                                        </option>
                                                        <option value="Cameroon">
                                                            Cameroon
                                                        </option>
                                                        <option value="Canada">
                                                            Canada
                                                        </option>
                                                        <option value="Cape Verde">
                                                            Cape Verde
                                                        </option>
                                                        <option value="Cayman Islands">
                                                            Cayman Islands
                                                        </option>
                                                        <option value="Central African Republic">
                                                            Central African Republic
                                                        </option>
                                                        <option value="Chad">
                                                            Chad
                                                        </option>
                                                        <option value="Chile">
                                                            Chile
                                                        </option>
                                                        <option value="China">
                                                            China
                                                        </option>
                                                        <option value="Christmas Island">
                                                            Christmas Island
                                                        </option>
                                                        <option value="Cocos (Keeling) Islands">
                                                            Cocos (Keeling) Islands
                                                        </option>
                                                        <option value="Colombia">
                                                            Colombia
                                                        </option>
                                                        <option value="Comoros">
                                                            Comoros
                                                        </option>
                                                        <option value="Congo">
                                                            Congo
                                                        </option>
                                                        <option value="Cook Islands">
                                                            Cook Islands
                                                        </option>
                                                        <option value="Costa Rica">
                                                            Costa Rica
                                                        </option>
                                                        <option value="Cote D&#039;Ivoire">
                                                            Cote D&#039;Ivoire
                                                        </option>
                                                        <option value="Croatia">
                                                            Croatia
                                                        </option>
                                                        <option value="Cuba">
                                                            Cuba
                                                        </option>
                                                        <option value="Cyprus">
                                                            Cyprus
                                                        </option>
                                                        <option value="Czech Republic">
                                                            Czech Republic
                                                        </option>
                                                        <option value="Democratic Republic of the Congo">
                                                            Democratic Republic of the Congo
                                                        </option>
                                                        <option value="Denmark">
                                                            Denmark
                                                        </option>
                                                        <option value="Djibouti">
                                                            Djibouti
                                                        </option>
                                                        <option value="Dominica">
                                                            Dominica
                                                        </option>
                                                        <option value="Dominican Republic">
                                                            Dominican Republic
                                                        </option>
                                                        <option value="Ecuador">
                                                            Ecuador
                                                        </option>
                                                        <option value="Egypt">
                                                            Egypt
                                                        </option>
                                                        <option value="El Salvador">
                                                            El Salvador
                                                        </option>
                                                        <option value="Equatorial Guinea">
                                                            Equatorial Guinea
                                                        </option>
                                                        <option value="Eritrea">
                                                            Eritrea
                                                        </option>
                                                        <option value="Estonia">
                                                            Estonia
                                                        </option>
                                                        <option value="Ethiopia">
                                                            Ethiopia
                                                        </option>
                                                        <option value="Falkland Islands (Malvinas)">
                                                            Falkland Islands (Malvinas)
                                                        </option>
                                                        <option value="Faroe Islands">
                                                            Faroe Islands
                                                        </option>
                                                        <option value="Fiji">
                                                            Fiji
                                                        </option>
                                                        <option value="Finland">
                                                            Finland
                                                        </option>
                                                        <option value="France">
                                                            France
                                                        </option>
                                                        <option value="French Guiana">
                                                            French Guiana
                                                        </option>
                                                        <option value="French Polynesia">
                                                            French Polynesia
                                                        </option>
                                                        <option value="French Southern Territories">
                                                            French Southern Territories
                                                        </option>
                                                        <option value="Gabon">
                                                            Gabon
                                                        </option>
                                                        <option value="Gambia">
                                                            Gambia
                                                        </option>
                                                        <option value="Georgia">
                                                            Georgia
                                                        </option>
                                                        <option value="Germany">
                                                            Germany
                                                        </option>
                                                        <option value="Ghana">
                                                            Ghana
                                                        </option>
                                                        <option value="Gibraltar">
                                                            Gibraltar
                                                        </option>
                                                        <option value="Greece">
                                                            Greece
                                                        </option>
                                                        <option value="Greenland">
                                                            Greenland
                                                        </option>
                                                        <option value="Grenada">
                                                            Grenada
                                                        </option>
                                                        <option value="Guadeloupe">
                                                            Guadeloupe
                                                        </option>
                                                        <option value="Guam">
                                                            Guam
                                                        </option>
                                                        <option value="Guatemala">
                                                            Guatemala
                                                        </option>
                                                        <option value="Guinea">
                                                            Guinea
                                                        </option>
                                                        <option value="Guinea-Bissau">
                                                            Guinea-Bissau
                                                        </option>
                                                        <option value="Guyana">
                                                            Guyana
                                                        </option>
                                                        <option value="Haiti">
                                                            Haiti
                                                        </option>
                                                        <option value="Heard Island and Mcdonald Islands">
                                                            Heard Island and Mcdonald Islands
                                                        </option>
                                                        <option value="Holy See (Vatican City State)">
                                                            Holy See (Vatican City State)
                                                        </option>
                                                        <option value="Honduras">
                                                            Honduras
                                                        </option>
                                                        <option value="Hong Kong">
                                                            Hong Kong
                                                        </option>
                                                        <option value="Hungary">
                                                            Hungary
                                                        </option>
                                                        <option value="Iceland">
                                                            Iceland
                                                        </option>
                                                        <option value="India">
                                                            India
                                                        </option>
                                                        <option value="Indonesia">
                                                            Indonesia
                                                        </option>
                                                        <option value="Iran, Islamic Republic of">
                                                            Iran, Islamic Republic of
                                                        </option>
                                                        <option value="Iraq">
                                                            Iraq
                                                        </option>
                                                        <option value="Ireland">
                                                            Ireland
                                                        </option>
                                                        <option value="Isle of Man">
                                                            Isle of Man
                                                        </option>
                                                        <option value="Israel">
                                                            Israel
                                                        </option>
                                                        <option value="Italy">
                                                            Italy
                                                        </option>
                                                        <option value="Jamaica">
                                                            Jamaica
                                                        </option>
                                                        <option value="Japan">
                                                            Japan
                                                        </option>
                                                        <option value="Jordan">
                                                            Jordan
                                                        </option>
                                                        <option value="Kazakhstan">
                                                            Kazakhstan
                                                        </option>
                                                        <option value="Kenya">
                                                            Kenya
                                                        </option>
                                                        <option value="Kiribati">
                                                            Kiribati
                                                        </option>
                                                        <option value="Korea, Democratic People&#039;s Republic of">
                                                            Korea, Democratic People&#039;s Republic of
                                                        </option>
                                                        <option value="Korea, Republic of">
                                                            Korea, Republic of
                                                        </option>
                                                        <option value="Kosovo">
                                                            Kosovo
                                                        </option>
                                                        <option value="Kuwait">
                                                            Kuwait
                                                        </option>
                                                        <option value="Kyrgyzstan">
                                                            Kyrgyzstan
                                                        </option>
                                                        <option value="Lao People&#039;s Democratic Republic">
                                                            Lao People&#039;s Democratic Republic
                                                        </option>
                                                        <option value="Latvia">
                                                            Latvia
                                                        </option>
                                                        <option value="Lebanon">
                                                            Lebanon
                                                        </option>
                                                        <option value="Lesotho">
                                                            Lesotho
                                                        </option>
                                                        <option value="Liberia">
                                                            Liberia
                                                        </option>
                                                        <option value="Libyan Arab Jamahiriya">
                                                            Libyan Arab Jamahiriya
                                                        </option>
                                                        <option value="Liechtenstein">
                                                            Liechtenstein
                                                        </option>
                                                        <option value="Lithuania">
                                                            Lithuania
                                                        </option>
                                                        <option value="Luxembourg">
                                                            Luxembourg
                                                        </option>
                                                        <option value="Macao">
                                                            Macao
                                                        </option>
                                                        <option value="Macedonia, the Former Yugoslav Republic of">
                                                            Macedonia, the Former Yugoslav Republic of
                                                        </option>
                                                        <option value="Madagascar">
                                                            Madagascar
                                                        </option>
                                                        <option value="Malawi">
                                                            Malawi
                                                        </option>
                                                        <option value="Malaysia">
                                                            Malaysia
                                                        </option>
                                                        <option value="Maldives">
                                                            Maldives
                                                        </option>
                                                        <option value="Mali">
                                                            Mali
                                                        </option>
                                                        <option value="Malta">
                                                            Malta
                                                        </option>
                                                        <option value="Marshall Islands">
                                                            Marshall Islands
                                                        </option>
                                                        <option value="Martinique">
                                                            Martinique
                                                        </option>
                                                        <option value="Mauritania">
                                                            Mauritania
                                                        </option>
                                                        <option value="Mauritius">
                                                            Mauritius
                                                        </option>
                                                        <option value="Mayotte">
                                                            Mayotte
                                                        </option>
                                                        <option value="Mexico">
                                                            Mexico
                                                        </option>
                                                        <option value="Micronesia, Federated States of">
                                                            Micronesia, Federated States of
                                                        </option>
                                                        <option value="Moldova, Republic of">
                                                            Moldova, Republic of
                                                        </option>
                                                        <option value="Monaco">
                                                            Monaco
                                                        </option>
                                                        <option value="Mongolia">
                                                            Mongolia
                                                        </option>
                                                        <option value="Montserrat">
                                                            Montserrat
                                                        </option>
                                                        <option value="Morocco">
                                                            Morocco
                                                        </option>
                                                        <option value="Mozambique">
                                                            Mozambique
                                                        </option>
                                                        <option value="Myanmar">
                                                            Myanmar
                                                        </option>
                                                        <option value="Namibia">
                                                            Namibia
                                                        </option>
                                                        <option value="Nauru">
                                                            Nauru
                                                        </option>
                                                        <option value="Nepal">
                                                            Nepal
                                                        </option>
                                                        <option value="Netherlands">
                                                            Netherlands
                                                        </option>
                                                        <option value="Netherlands Antilles">
                                                            Netherlands Antilles
                                                        </option>
                                                        <option value="New Caledonia">
                                                            New Caledonia
                                                        </option>
                                                        <option value="New Zealand">
                                                            New Zealand
                                                        </option>
                                                        <option value="Nicaragua">
                                                            Nicaragua
                                                        </option>
                                                        <option value="Niger">
                                                            Niger
                                                        </option>
                                                        <option value="Nigeria">
                                                            Nigeria
                                                        </option>
                                                        <option value="Niue">
                                                            Niue
                                                        </option>
                                                        <option value="Norfolk Island">
                                                            Norfolk Island
                                                        </option>
                                                        <option value="Northern Mariana Islands">
                                                            Northern Mariana Islands
                                                        </option>
                                                        <option value="Norway">
                                                            Norway
                                                        </option>
                                                        <option value="Oman">
                                                            Oman
                                                        </option>
                                                        <option value="Pakistan">
                                                            Pakistan
                                                        </option>
                                                        <option value="Palau">
                                                            Palau
                                                        </option>
                                                        <option value="Palestinian Territory, Occupied">
                                                            Palestinian Territory, Occupied
                                                        </option>
                                                        <option value="Panama">
                                                            Panama
                                                        </option>
                                                        <option value="Papua New Guinea">
                                                            Papua New Guinea
                                                        </option>
                                                        <option value="Paraguay">
                                                            Paraguay
                                                        </option>
                                                        <option value="Peru">
                                                            Peru
                                                        </option>
                                                        <option value="Philippines">
                                                            Philippines
                                                        </option>
                                                        <option value="Pitcairn">
                                                            Pitcairn
                                                        </option>
                                                        <option value="Poland">
                                                            Poland
                                                        </option>
                                                        <option value="Portugal">
                                                            Portugal
                                                        </option>
                                                        <option value="Puerto Rico">
                                                            Puerto Rico
                                                        </option>
                                                        <option value="Qatar">
                                                            Qatar
                                                        </option>
                                                        <option value="Reunion">
                                                            Reunion
                                                        </option>
                                                        <option value="Romania">
                                                            Romania
                                                        </option>
                                                        <option value="Russian Federation">
                                                            Russian Federation
                                                        </option>
                                                        <option value="Rwanda">
                                                            Rwanda
                                                        </option>
                                                        <option value="Saint Helena">
                                                            Saint Helena
                                                        </option>
                                                        <option value="Saint Kitts and Nevis">
                                                            Saint Kitts and Nevis
                                                        </option>
                                                        <option value="Saint Lucia">
                                                            Saint Lucia
                                                        </option>
                                                        <option value="Saint Pierre and Miquelon">
                                                            Saint Pierre and Miquelon
                                                        </option>
                                                        <option value="Saint Vincent and the Grenadines">
                                                            Saint Vincent and the Grenadines
                                                        </option>
                                                        <option value="Samoa">
                                                            Samoa
                                                        </option>
                                                        <option value="San Marino">
                                                            San Marino
                                                        </option>
                                                        <option value="Sao Tome and Principe">
                                                            Sao Tome and Principe
                                                        </option>
                                                        <option value="Saudi Arabia">
                                                            Saudi Arabia
                                                        </option>
                                                        <option value="Senegal">
                                                            Senegal
                                                        </option>
                                                        <option value="Serbia and Montenegro">
                                                            Serbia and Montenegro
                                                        </option>
                                                        <option value="Seychelles">
                                                            Seychelles
                                                        </option>
                                                        <option value="Sierra Leone">
                                                            Sierra Leone
                                                        </option>
                                                        <option value="Singapore">
                                                            Singapore
                                                        </option>
                                                        <option value="Slovakia">
                                                            Slovakia
                                                        </option>
                                                        <option value="Slovenia">
                                                            Slovenia
                                                        </option>
                                                        <option value="Solomon Islands">
                                                            Solomon Islands
                                                        </option>
                                                        <option value="Somalia">
                                                            Somalia
                                                        </option>
                                                        <option value="Somaliland">
                                                            Somaliland
                                                        </option>
                                                        <option value="South Africa">
                                                            South Africa
                                                        </option>
                                                        <option value="South Georgia and the South Sandwich Islands">
                                                            South Georgia and the South Sandwich Islands
                                                        </option>
                                                        <option value="South Sudan">
                                                            South Sudan
                                                        </option>
                                                        <option value="Spain">
                                                            Spain
                                                        </option>
                                                        <option value="Sri Lanka">
                                                            Sri Lanka
                                                        </option>
                                                        <option value="Sudan">
                                                            Sudan
                                                        </option>
                                                        <option value="Suriname">
                                                            Suriname
                                                        </option>
                                                        <option value="Svalbard and Jan Mayen">
                                                            Svalbard and Jan Mayen
                                                        </option>
                                                        <option value="Swaziland">
                                                            Swaziland
                                                        </option>
                                                        <option value="Sweden">
                                                            Sweden
                                                        </option>
                                                        <option value="Switzerland">
                                                            Switzerland
                                                        </option>
                                                        <option value="Syrian Arab Republic">
                                                            Syrian Arab Republic
                                                        </option>
                                                        <option value="Taiwan, Province of China">
                                                            Taiwan, Province of China
                                                        </option>
                                                        <option value="Tajikistan">
                                                            Tajikistan
                                                        </option>
                                                        <option value="Tanzania, United Republic of">
                                                            Tanzania, United Republic of
                                                        </option>
                                                        <option value="Thailand">
                                                            Thailand
                                                        </option>
                                                        <option value="Timor-Leste">
                                                            Timor-Leste
                                                        </option>
                                                        <option value="Togo">
                                                            Togo
                                                        </option>
                                                        <option value="Tokelau">
                                                            Tokelau
                                                        </option>
                                                        <option value="Tonga">
                                                            Tonga
                                                        </option>
                                                        <option value="Trinidad and Tobago">
                                                            Trinidad and Tobago
                                                        </option>
                                                        <option value="Tunisia">
                                                            Tunisia
                                                        </option>
                                                        <option value="Turkey">
                                                            Turkey
                                                        </option>
                                                        <option value="Turkmenistan">
                                                            Turkmenistan
                                                        </option>
                                                        <option value="Turks and Caicos Islands">
                                                            Turks and Caicos Islands
                                                        </option>
                                                        <option value="Tuvalu">
                                                            Tuvalu
                                                        </option>
                                                        <option value="Uganda">
                                                            Uganda
                                                        </option>
                                                        <option value="Ukraine">
                                                            Ukraine
                                                        </option>
                                                        <option value="United Arab Emirates">
                                                            United Arab Emirates
                                                        </option>
                                                        <option value="United Kingdom">
                                                            United Kingdom
                                                        </option>
                                                        <option value="United States">
                                                            United States
                                                        </option>
                                                        <option value="United States Minor Outlying Islands">
                                                            United States Minor Outlying Islands
                                                        </option>
                                                        <option value="Uruguay">
                                                            Uruguay
                                                        </option>
                                                        <option value="Uzbekistan">
                                                            Uzbekistan
                                                        </option>
                                                        <option value="Vanuatu">
                                                            Vanuatu
                                                        </option>
                                                        <option value="Venezuela">
                                                            Venezuela
                                                        </option>
                                                        <option value="Viet Nam">
                                                            Viet Nam
                                                        </option>
                                                        <option value="Virgin Islands, British">
                                                            Virgin Islands, British
                                                        </option>
                                                        <option value="Virgin Islands, U.S.">
                                                            Virgin Islands, U.S.
                                                        </option>
                                                        <option value="Wallis and Futuna">
                                                            Wallis and Futuna
                                                        </option>
                                                        <option value="Western Sahara">
                                                            Western Sahara
                                                        </option>
                                                        <option value="Yemen">
                                                            Yemen
                                                        </option>
                                                        <option value="Zambia">
                                                            Zambia
                                                        </option>
                                                        <option value="Zimbabwe">
                                                            Zimbabwe
                                                        </option>
                                                        <option value="Syria">
                                                            Syria
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="_form_element _x04229842 _full_width" >
                                                <fieldset className="_form-fieldset">
                                                    <div className="_row">
                                                        <label className="_form-label">
                                                            Interests*
                                                        </label>
                                                    </div>
                                                    <input data-autofill="false" type="hidden" id="field[246][]" name="field[246][]" value="~|" />
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_246Exhibitor" type="checkbox" name="field[246][]" value="Exhibitor" className="any" required />
                                                        <span>
                                                            <label className="checkbox-label">
                                                                Exhibitor
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_246Sponsor" type="checkbox" name="field[246][]" value="Sponsor" />
                                                        <span>
                                                            <label className="checkbox-label">
                                                                Sponsor
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_246Event Partner" type="checkbox" name="field[246][]" value="Event Partner" />
                                                        <span>
                                                            <label className="checkbox-label">
                                                                Event Partner
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_246Media Partner" type="checkbox" name="field[246][]" value="Media Partner" />
                                                        <span>
                                                            <label className="checkbox-label">
                                                                Media Partner
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_246Attend Conference / Workshop / Awards / B2B Meetings" type="checkbox" name="field[246][]" value="Attend Conference / Workshop / Awards / B2B Meetings" />
                                                        <span>
                                                            <label className="checkbox-label">
                                                                Attend Conference / Workshop / Awards / B2B Meetings
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_246Visitor" type="checkbox" name="field[246][]" value="Visitor" />
                                                        <span>
                                                            <label className="checkbox-label">
                                                                Visitor
                                                            </label>
                                                        </span>
                                                    </div>
                                                </fieldset>
                                            </div>

                                            <div className="row m-t-15">
                                                <div className="col-12 p-0 d-none">
                                                    <input id="bookstand" type="checkbox" />
                                                    <span>
                                                        <label className="checkbox-label">
                                                            Book your Stand
                                                        </label>
                                                    </span>
                                                </div>

                                                <div className="col-12 p-0">
                                                    <input id="brochure" onChange={(e) => {
                                                        this.changeCheckedStatus()
                                                    }} type="checkbox" />
                                                    <span>
                                                        <label className="checkbox-label">
                                                            Download Brochure & Post Show Report
                                                        </label>
                                                    </span>
                                                </div>

                                                {/* <div className="col-6 d-none">
                                                    <input id="Sponsorship" onChange={(e) => {
                                                        this.changeCheckedStatus()
                                                    }} type="checkbox" />
                                                    <span>
                                                        <label className="checkbox-label">
                                                            Download Sponsorship Packages
                                                        </label>
                                                    </span>
                                                </div> */}

                                                <div className="col-12 p-0">
                                                    <input id="newsletter" onChange={(e) => {
                                                        this.changeCheckedStatus()
                                                    }} type="checkbox" />
                                                    <span>
                                                        <label className="checkbox-label">
                                                            Subscribe to our Newsletter
                                                        </label>

                                                    </span>
                                                </div>
                                            </div>

                                            <div style={{ display: "none" }}>
                                                <div className="_form_element _x68081836 _full_width " >
                                                    <fieldset className="_form-fieldset">
                                                        <div className="_row">
                                                            <legend className="_form-label">
                                                                CWS Book Your Stand
                                                            </legend>
                                                        </div>
                                                        <input data-autofill="false" type="hidden" id="field[279][]" name="field[279][]" value="~|" />
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_279Yes" type="checkbox" name="field[279][]" value="Yes" />
                                                            <span>
                                                                <label>
                                                                    Yes
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_279No" type="checkbox" name="field[279][]" value="No" checked />
                                                            <span>
                                                                <label>
                                                                    No
                                                                </label>
                                                            </span>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="_form_element _x88067419 _full_width " >
                                                    <fieldset className="_form-fieldset">
                                                        <div className="_row">
                                                            <legend className="_form-label">
                                                                CWS Download Brochure
                                                            </legend>
                                                        </div>
                                                        <input data-autofill="false" type="hidden" id="field[250][]" name="field[250][]" value="~|" />
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_250Yes" type="checkbox" name="field[250][]" value="Yes" />
                                                            <span>
                                                                <label>
                                                                    Yes
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_250No" type="checkbox" name="field[250][]" value="No" checked />
                                                            <span>
                                                                <label>
                                                                    No
                                                                </label>
                                                            </span>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="_form_element _x93254496 _full_width " >
                                                    <fieldset className="_form-fieldset">
                                                        <div className="_row">
                                                            <legend className="_form-label">
                                                                CWS Download Post Show Report
                                                            </legend>
                                                        </div>
                                                        <input data-autofill="false" type="hidden" id="field[251][]" name="field[251][]" value="~|" />
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_251Yes" type="checkbox" name="field[251][]" value="Yes" />
                                                            <span>
                                                                <label>
                                                                    Yes
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_251No" type="checkbox" name="field[251][]" value="No" checked />
                                                            <span>
                                                                <label>
                                                                    No
                                                                </label>
                                                            </span>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="_form_element _x84025556 _full_width " >
                                                    <fieldset className="_form-fieldset">
                                                        <div className="_row">
                                                            <legend className="_form-label">
                                                                CWS Subscribe to Newsletter
                                                            </legend>
                                                        </div>
                                                        <input data-autofill="false" type="hidden" id="field[252][]" name="field[252][]" value="~|" />
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_252Yes" type="checkbox" name="field[252][]" value="Yes" />
                                                            <span>
                                                                <label>
                                                                    Yes
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_252No" type="checkbox" name="field[252][]" value="No" checked />
                                                            <span>
                                                                <label>
                                                                    No
                                                                </label>
                                                            </span>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>

                                            <div className="_form_element _x63920454 _full_width " >
                                                <label className="_form-label">
                                                    Message
                                                </label>
                                                <div className="_field-wrapper">
                                                    <textarea id="field[6]" name="field[6]" className="form-control" style={{ height: "150px" }}></textarea>
                                                </div>
                                            </div>

                                            <div className="_form_element _x52230745 _full_width m-t-15">
                                                <label className="_form-label">
                                                    Please verify your request*
                                                </label>
                                                <div className="g-recaptcha" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go">
                                                </div>
                                            </div>

                                            <div className="_button-wrapper _full_width">
                                                <button id="_form_404_submit" className="_submit form-submit" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                            <div className="_clear-element">
                                            </div>
                                        </div>
                                        <div className="_form-thank-you" style={{ display: "none" }}>
                                        <span id="message">
                                                Dear [name]
                                                <br />
                                                Greetings from the Wood Show Global Organizing Committee
                                                <br />
                                                Thank you for your interest in becoming part of the Wood Show Global – Cairo edition, your submission has been submitted successfully.
                                                <br />
                                                The Organizing Committee will revert to you shortly with the final confirmation for your registration.
                                                <br />
                                                For Sponsorship Opportunity, please contact Mr. Mohamed Rilwan at <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="mailto:mohamed.rilwan@woodshowglobal.com">mohamed.rilwan@woodshowglobal.com</a> or Call <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="tel:971561889859">+971 56 188 9859</a>
                                                <br />
                                                For Partnership Opportunity, please contact Mr Dilip Kumar at <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="mailto:Dilip.kumar@woodshowglobal.com">Dilip.kumar@woodshowglobal.com</a> or Call <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="tel:971564034042">+971 56 403 4042</a>
                                                <br />
                                                For Marketing Opportunity, please contact Ms. Rowaida Elbatrawy at <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="mailto:rowaida.elbatrawy@woodshowglobal.com">rowaida.elbatrawy@woodshowglobal.com</a>
                                                <br />
                                                For General Inquiries, please email us at <a style={{ color: "#0a58ca", textDecoration: "underline" }} href="mailto:info@woodshowglobal.com">info@woodshowglobal.com</a>
                                            </span>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </ContentMainComponent>
            </React.Fragment >
        );
    }
}
