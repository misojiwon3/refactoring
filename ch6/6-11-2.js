import fs from 'fs';

function run(args) {
  const command = parseCommand(args);
  countOrders(command);
}

const parseCommand = (args) => {
  console.log(args[2])
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }
  
  const fileName = `${args[2]}.json`;
  if (!fs.existsSync('ch6/'+fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  return {
    fileName, 
    countReadyOnly: args.includes('-r')
  };
}

function countOrders(command) {
  const rawData = fs.readFileSync('ch6/'+command.fileName);
  const orders = JSON.parse(rawData);  
  const filtered = command.countReadyOnly 
    ? orders.filter((order) => order.status === 'ready').length 
    : orders.length;
  console.log(filtered);
}

run(process.argv);