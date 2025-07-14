function AllData(){
    const author = "Paul Kimani"
    let is_married = true
   let salary = 30000; // number

  //   const calculatePaye = (s) => s * 0.16;

  function calculatePaye(s) {
    return s * 0.16;
  }

  return (
    <div>
      <p>The Author of this book is {author}</p>
      <p>The author is married {is_married.toString()}</p>
      <p>The Author salary {salary}</p>
      <p>The paye is {calculatePaye(salary)}</p>
    </div>
  );
}

export default AllData;

