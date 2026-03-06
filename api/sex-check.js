export default function handler(req, res) {
    // 1. 安全提取：確保 body 存在，如果沒有則給它一個空物件，避免崩潰
    const body = req.body || {};
    
    // 2. 從 body 獲取 v_CustID，若 body 本身是字串（某些狀況），也能確保後續處理
    const v_CustID = body.v_CustID || "";
    const S_CustID = String(v_CustID); // 確保它是字串，防止 .length 錯誤

    let OB_Sex = "C";

    // 判斷邏輯
    if (S_CustID.length === 8) {
        OB_Sex = "C";
    } else if (S_CustID.length > 2) {
        // substring(1, 2) 是取第 2 個字元 (索引從 0 開始，1 代表第 2 個字)
        const S_CustID2 = S_CustID.substring(1, 2);
        
        if (["1", "8", "A", "C"].includes(S_CustID2)) {
            OB_Sex = "M";
        } else if (["2", "9", "B", "D"].includes(S_CustID2)) {
            OB_Sex = "F";
        }
    }

    // 回傳 JSON
    res.status(200).json({ OB_Sex: OB_Sex });
}
