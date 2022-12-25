function legendaryFarming(input) {
  let array = input.toLowerCase().split(" ");
  let junkMaterial = {};
  let keyMaterials = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };

  mainLoop: for (let i = 0; i < array.length; i++) {
    let qty = Number(array[i++]);
    let material = array[i];

    switch (material) {
      case "shards":
        keyMaterials[material] += qty;
        if (keyMaterials[material] >= 250) {
          console.log(printLegendaryItem(material));
          keyMaterials[material] -= 250;
          break mainLoop;
        }
        break;
      case "fragments":
        keyMaterials[material] += qty;
        if (keyMaterials[material] >= 250) {
          console.log(printLegendaryItem(material));
          keyMaterials[material] -= 250;
          break mainLoop;
        }
        break;
      case "motes":
        keyMaterials[material] += qty;
        if (keyMaterials[material] >= 250) {
          console.log(printLegendaryItem(material));
          keyMaterials[material] -= 250;
          break mainLoop;
        }
        break;
      default:
        if (!junkMaterial.hasOwnProperty(material)) {
          junkMaterial[material] = 0;
        }
        junkMaterial[material] += qty;
        break;
    }
  }

  // Print result
  printRequiredMaterials(keyMaterials);
  printJunkMaterial(junkMaterial);

  //function part

  function printLegendaryItem(item) {
    let legendaryItem = "";
    switch (item) {
      case "shards":
        legendaryItem = "Shadowmourne obtained!";
        break;
      case "fragments":
        legendaryItem = "Valanyr obtained!";
        break;
      case "motes":
        legendaryItem = "Dragonwrath obtained!";
        break;
    }
    return legendaryItem;
  }

  function printRequiredMaterials(objMaterial) {
    return Object.entries(objMaterial)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach((el) => console.log(`${el[0]}: ${el[1]}`));
  }

  function printJunkMaterial(objJunkMaterial) {
    return Object.entries(objJunkMaterial)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach((el) => console.log(`${el[0]}: ${el[1]}`));
  }
}
legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");

legendaryFarming("123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver");

legendaryFarming("123 silver 9 fangs 7 stones 19 silver 6 shards 8 shards 5 motes 9 fangs 75 motes");

legendaryFarming('250 shards 250 fragments 250 motes');