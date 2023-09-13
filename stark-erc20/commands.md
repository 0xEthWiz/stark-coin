## Declare contract

sncast --url https://starknet-goerli.infura.io/v3/2f57c80fb95b4fb38725aea62bc77c1d --account test3 declare --contract-name erc_20

## Deploy contract:

sncast --account test3 --url https://starknet-goerli.infura.io/v3/2f57c80fb95b4fb38725aea62bc77c1d deploy --constructor-calldata 0x1 0x737461726b2d636f696e 0x535441524b 6 1000000 0x4cc4979efbfd95d68c51f800f2d099539bc5f82fabf2c0cd8a8e838f93f2ee3 --class-hash 0x028a0e7c0309f8e751331d24f48509fa545156193feff88a6fb1b8a9d745c912

sncast --account test3 --url https://starknet-goerli.infura.io/v3/2f57c80fb95b4fb38725aea62bc77c1d deploy --class-hash 0x028a0e7c0309f8e751331d24f48509fa545156193feff88a6fb1b8a9d745c912 --constructor-calldata "545218989635171217533294 495873782379 8 0 1000000 0x4cc4979efbfd95d68c51f800f2d099539bc5f82fabf2c0cd8a8e838f93f2ee3"
