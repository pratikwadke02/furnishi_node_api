exports.OTP_GENERATE = () =>
{
    /*******************   GENERATING TIME  **************** */

    const expiryDatetime = new Date();

    //keep 30 minutes expiry time
    expiryDatetime.setMinutes(expiryDatetime.getMinutes() + 30);

    /*******************  END OF  GENERATING TIME  **************** */

    // GENERATING OTP between 100000 to 999999 (6 digits)
    const uniqueNum = Math.floor(100000 + Math.random() * 900000);
    //Math.floor(Math.random() * (max - min + 1) + min)

    return { otp: uniqueNum, expiryDatetime };
}
