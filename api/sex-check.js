export default function handler(req, res) {
    // 從請求中獲取 v_CustID
    const { v_CustID } = req.body;
    const S_CustID = v_CustID || "";
    let OB_Sex = "C";

    if (S_CustID.length === 8) {
        OB_Sex = "C";
    } else if (S_CustID.length !== 8 && S_CustID.length > 2) {
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
