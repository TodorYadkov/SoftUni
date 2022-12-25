function ladybug(arr) {
  let fieldSize = Number(arr[0]);
  let ladybugIndex = arr[1].split(' ');
  let field = [];

  for (let i = 0; i < fieldSize; i++) {
    field.push(0);
  }

  for (let i = 0; i < ladybugIndex.length; i++) {
    let check = Number(ladybugIndex[i]);
    if (check > field.length - 1 || check < 0) {
      continue;
    }
    field[ladybugIndex[i]] = 1;
  }

  for (let i = 2; i < arr.length; i++) {
    let command = arr[i];
    command = command.split(' ');
    let startPoint = Number(command[0]);
    let direction = command[1];
    let flyLength = Number(command[2]);
    
    if (field[startPoint] === 0 || startPoint > field.length - 1 || startPoint < 0) {
      continue;
    }

    field[startPoint] = 0;

    if (flyLength < 0) {
      if (direction === 'right') {
        direction = 'left';
      } else if (direction === 'left') {
        direction = 'right';
      }
      flyLength = Math.abs(flyLength);
    }

    let nextPoint = '';
    if (direction === 'right') {
      nextPoint = startPoint + flyLength;
    } else if (direction === 'left') {
      nextPoint = startPoint - flyLength;
    }

    while (field[nextPoint] === 1) {
      if (direction === 'right') {
        nextPoint += flyLength;
      } else if (direction === 'left') {
        nextPoint -= flyLength;
      }
    }
    if (nextPoint > field.length - 1
      || nextPoint < 0) {
      continue;
    } 
      
    field[nextPoint] = 1;
    

  }
  console.log(field.join(' '));
}
ladybug([3, '1', '0 right 1', '2 right 1']);
ladybug([ 3, '0 1 2','0 right 1','1 right 1','2 right 1']);
ladybug([5, '3', '3 left 2', '1 left -2']);