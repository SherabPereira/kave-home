type ProductMeasurements = {
    height: string;
    width: string;
    length: string;
  }

export type Product = {
    productSku: string,
    productName: string,
    productCollection: string,
    productCategoryHierarchy: string,
    productMeasurements: ProductMeasurements,
    productPrice: string,
    productPriceDiscount: string | number,
    productImageUrl: string,
    store: string,
    ecoPart: string,
    productMaterials: string,
    productUsage: string,
    productAssemblyTime: number | string,
    productAssemblyDescription: string,
  }


