
/** D-Day 값과 클릭했을 때 띄울 message 반환 함수 */
export default function getDDayAndMessage(createdDayCnt: number) {
    const daysUntilFullBloom = 20 - createdDayCnt;

    // D-Day 계산
    const dDay = daysUntilFullBloom === 0
        ? 'D-Day'
        : daysUntilFullBloom > 0
            ? `D-${daysUntilFullBloom}`
            : `D+${-daysUntilFullBloom}`;
    
    // 메시지 생성
    const message = daysUntilFullBloom === 0
        ? '오늘 드디어 벚꽃이 만개했어요!'
        : daysUntilFullBloom > 0
        ? `${daysUntilFullBloom}일 뒤에 벚꽃이 만개해요!`
        : `${-daysUntilFullBloom}일 전에 벚꽃이 만개했어요!`;

    return { dDay, message };
}