import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    .bg-footer{
    background-color: #295C7A;
}
.bg-footer-2{
    background-color: #252B42;
}
.mb-footer h6:nth-child(n){
    margin-bottom: 16px;
}
.icon-phone-footer{
    color: #8EC2F2;
    width: 22.81px;
    height: 22.81px;
}
.icon-social-media{
    width: 23.98px;
    height: 23.98px;
}
.pe-social-media a:nth-child(n){
    padding-right: 18px;
}
.pe-social-media a:last-child{
    padding: 0;
}
.icon-facebook{
    color: #335BF5;
}
.icon-instagram{
    color: #E51F5A;
}
.icon-twitter{
    color: #21A6DF;
}
.icon-youtube{
    color: #E42F08;
}
`