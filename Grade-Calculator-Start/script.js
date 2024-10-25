document.getElementById("btn").addEventListener("click", clickedbtn);

function clickedbtn() {
  //Input
  var client1 = Number(document.getElementById("ClientSide").value);
  var StructrePro0 = Number(document.getElementById("StructrePro").value);
  var StructrePro1 = Number(document.getElementById("StructurePro2").value);
  var Client2 = Number(document.getElementById("ClientSide2").value);
  var ProjectA = Number(document.getElementById("ProA").value);
  //Process
  let FinalAnswer =
    (client1 + StructrePro0 + StructrePro1 + Client2 + ProjectA) / 5;
  //Output
  document.getElementById("FinalAnswer").innerHTML = FinalAnswer;
}
