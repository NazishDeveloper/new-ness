export const shortDesc =(desc,txCount=200)=>{
    
    if (desc.length > txCount) {
        desc = desc.substr(0, 12)+'...';    
    }
    return desc;
}