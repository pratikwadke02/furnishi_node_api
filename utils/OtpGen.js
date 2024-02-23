exports.OTP_GENERATE = () =>
{
    /*******************   GENERATING TIME  **************** */

    const expiryDatetime = new Date();

    //keep 30 minutes expiry time
    expiryDatetime.setMinutes(expiryDatetime.getMinutes() + 30);

    /*******************  END OF  GENERATING TIME  **************** */

    // GENERATING OTP between 1000 to 9999 (4 digits)
    let uniqueNum = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    //Math.floor(Math.random() * (max - min + 1) + min)

    return { otp: uniqueNum, expiryDatetime };
}
