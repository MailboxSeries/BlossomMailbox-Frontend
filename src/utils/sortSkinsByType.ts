export const sortSkinsByType = (skins, skinSex: string, data) => {
    return skins[skinSex].reduce((acc, {type, items, title}) => {
        const typeData = data[type];
        if (!typeData) {
            return acc; // 해당 타입에 대한 데이터가 없으면 건너뜀
        }
    
        // 각 타입별로 having, unlock, lock 순서대로 재배열
        const allIndices = [...typeData.having, ...typeData.unlock, ...typeData.lock];
        const sortedItems = allIndices
            .map(index => items.find(item => item.index === index))
            .filter(item => item !== undefined); // 존재하지 않는 아이템은 제외
    
        acc[type] = { items: sortedItems, title }; // 재배열된 아이템과 타이틀 저장
        return acc;
    }, {});
};
