for( let rec of date ){
  let bill = rec['bill']
  if( rec['crg'] ){
    bill = addCharge(bill);
  }
  createMail( rec['name'],bill );
}
