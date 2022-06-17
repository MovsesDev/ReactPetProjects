const createSbjectSearch = (obj) => {
  let newObj = {};
  if (obj.min_price || obj.max_price) {
    newObj.price = {};
  }
  if (obj.min_area || obj.max_area) {
    newObj.area = {};
  }

  if (obj.min_floor || obj.max_floor) {
    newObj.floor = {};
  }

  for (var prop in obj) {
    switch (prop) {
      case "min_price":
        newObj.price.$gte = obj[prop];
        break;
      case "max_price":
        newObj.price.$lte = obj[prop];
        break;
      case "min_area":
        newObj.area.$gte = obj[prop];
        break;
      case "max_area":
        newObj.area.$lte = obj[prop];
        break;
      case "min_floor":
        newObj.floor.$gte = obj[prop];
        break;
      case "max_floor":
        newObj.floor.$lte = obj[prop];
        break;
      case "rooms":
        newObj.rooms = obj[prop];
        break;
      case "building_type":
        newObj.building_type = obj[prop];
        break;
      case "sale":
        newObj.sale = obj[prop];
        break;
      case "rent":
        newObj.rent = obj[prop];
        break;
      case "search":
        break;
      case "street":
        newObj.street = obj[prop];
        break;
      case "district":
        newObj.district = obj[prop];
        break;
      case "search_code":
        newObj.search_code = obj[prop];
        break;
    }
  }
  return newObj;
};

module.exports = createSbjectSearch;
