function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const inputArr = JSON.parse(document.querySelector('#inputs textarea').value);
      const pBestRestaurant = document.querySelector('#bestRestaurant p');
      const pWorkers = document.querySelector('#workers p');

      const listRestaurants = {};
      let bestRestaurant = [];

      for (let el of inputArr) {
         let [restaurantName, workers] = el.split(' - ');
         let workersArr = workers.split(', ');

         for (let line of workersArr) {
            let [worker, salaray] = line.split(' ');

            if (listRestaurants[restaurantName] === undefined) {
               listRestaurants[restaurantName] = {};
            }

            listRestaurants[restaurantName][worker] = Number(salaray);
         }
      }

      for (let rName in listRestaurants) {
         let tempAvgSalary = 0;
         let countWorker = 0;
         for (let wName in listRestaurants[rName]) {
            tempAvgSalary += listRestaurants[rName][wName];
            countWorker++;
         }

         tempAvgSalary = (tempAvgSalary / countWorker);
         bestRestaurant.push({ [rName]: tempAvgSalary });
      }

      let workersStringResult = '';
      let bestRestaurantStringResult = '';
      let sortedRestaurantsBestAvgSalary = Object.entries(bestRestaurant.sort((a, b) => Object.entries(b)[0][1] - Object.entries(a)[0][1])[0]).flat();
      let sortedWorkersSalaryDSC = Object.entries(listRestaurants[sortedRestaurantsBestAvgSalary[0]]).sort((a, b) => b[1] - a[1]);

      bestRestaurantStringResult = `Name: ${sortedRestaurantsBestAvgSalary[0]} Average Salary: ${sortedRestaurantsBestAvgSalary[1].toFixed(2)} Best Salary: ${sortedWorkersSalaryDSC[0][1].toFixed(2)}`;
      sortedWorkersSalaryDSC.forEach(wName => workersStringResult += `Name: ${wName[0]} With Salary: ${wName[1]} `);
      workersStringResult = workersStringResult.trim();

      pBestRestaurant.textContent = bestRestaurantStringResult;
      pWorkers.textContent = workersStringResult;
   }
}