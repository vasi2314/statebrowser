import Navigation from "./Navigation";
const Problem=()=>{
    const starmethod=(s)=>{
      let length=s.length;
      let result=""
      if(length%2===1){
        let middleIndex=Math.floor(length/2)
        result = s.substring(0, middleIndex) + "*" + s.substring(middleIndex + 1);
      }else{
        let middleIndex1 = length / 2 - 1;
        let middleIndex2 = length / 2;
        result = s.substring(0, middleIndex1) + "**" + s.substring(middleIndex2 + 1);
      }
     
      return result;
    }
  
    let output=starmethod("vasisk");
    console.log(output);
    return(
        <>
        </>
    )
}
export default Problem()