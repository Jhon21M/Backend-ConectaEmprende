export const signToken = async (userId, email) => {
    const payload = {
        sub: userId,
        email,
    };
    const Secret = process.env.JWT_SECRET;

    const config = {
        expiresIn: "15m",
    };

    const token = await jwt.sign(payload, Secret, config);

    return {
        access_token: token,
    };
};
