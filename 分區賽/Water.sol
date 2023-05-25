//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WaterResourceContract{
    struct WaterData {
        uint256 usageData; // 用水量數據
        uint256 qualityData; // 水質數據
        uint256 reserveData; // 儲備水量數據
        uint256 recycledData; // 回收水量數據
        uint256 billingData; // 用水帳單數據
    }

    // 地址與用戶的用水數據映射
    mapping(address => WaterData) public waterResources;
    // 地址與用戶的用水總量映射
    mapping(address => uint256) public waterUsages;

    // 更新用戶的用水數據
    event WaterDataUpdated(
        address indexed user,
        uint256 indexed usage,
        uint256 indexed quality,
        uint256 reserve,
        uint256 recycled,
        uint256 billing
    );
    // 更新用戶的用水總量
    event WaterUsageUpdated(address indexed user, uint256 indexed usage);

    // 設置用戶的用水數據
    function setWaterData(
        address user,
        uint256 usage,
        uint256 quality,
        uint256 reserve,
        uint256 recycled,
        uint256 billing
    ) public {
        WaterData storage water = waterResources[user];
        water.usageData = usage;
        water.qualityData = quality;
        water.reserveData = reserve;
        water.recycledData = recycled;
        water.billingData = billing;

        emit WaterDataUpdated(user, usage, quality, reserve, recycled, billing);
    }

    // 獲取用戶的用水數據
    function getWaterData(address user)
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        WaterData storage water = waterResources[user];
        return (
            water.usageData,
            water.qualityData,
            water.reserveData,
            water.recycledData,
            water.billingData
        );
    }

    // 更新用戶的用水總量
    function updateWaterUsage(address user, uint256 usage) public {
        waterUsages[user] += usage;

        emit WaterUsageUpdated(user, usage);
    }

    // 獲取用戶的用水總量
    function getWaterUsage(address user) public view returns (uint256) {
        return waterUsages[user];
    }
}
