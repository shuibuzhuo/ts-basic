// 类型查找 lookup types
export type RequestData1 = {
  transactionId: string;
  user: {
    name: string;
    email: string;
    address: {
      stress: string;
      unitNumber: string;
    }[];
  };
  driverInfo: {
    licenceNumber: string;
    exporyDate: string;
  };
  payment: {
    creditCardNumber: string;
  };
};

// 明确 getPayment1 的返回类型，让所有使用的人都知道返回值的类型
function getPayment1(): { creditCardNumber: string } {
  return {
    creditCardNumber: "100",
  };
}

// 单独定义一个 type PaymentRequest，解决重复定义类型的问题
export type RequestData2 = {
  transactionId: string;
  user: {
    name: string;
    email: string;
    address: {
      stress: string;
      unitNumber: string;
    }[];
  };
  driverInfo: {
    licenceNumber: string;
    exporyDate: string;
  };
  payment: PaymentRequest;
};

// 单独定义一个 type
type PaymentRequest = {
  creditCardNumber: string;
};

function getPayment2(): PaymentRequest {
  return {
    creditCardNumber: "100",
  };
}

export type RequestData3 = {
  transactionId: string;
  user: {
    name: string;
    email: string;
    address: {
      stress: string;
      unitNumber: string;
    }[];
  };
  driverInfo: {
    licenceNumber: string;
    exporyDate: string;
  };
  payment: {
    creditCardNumber: string;
  };
};

function getPayment3(): RequestData3["payment"] {
  return {
    creditCardNumber: "100",
  };
}

// 如果 payment 新增了一个 alipay 类型，代码会有提示，我们可以马上修改
export type RequestData4 = {
  transactionId: string;
  user: {
    name: string;
    email: string;
    address: {
      stress: string;
      unitNumber: string;
    }[];
  };
  driverInfo: {
    licenceNumber: string;
    exporyDate: string;
  };
  payment: {
    creditCardNumber: string;
    alipay: string;
  };
};

function getPayment4(): RequestData4["payment"] {
  return {
    creditCardNumber: "100",
    alipay: "200", // RequestData4['payment'] 增加了 alipay: string 之后，这里的返回值还没有加上 alipay 字段之前，会马上报错
  };
}

// 嵌套解构
function getAddress(): RequestData4["user"]["address"][0] {
  return {
    stress: "人民广场",
    unitNumber: "1号",
  };
}
