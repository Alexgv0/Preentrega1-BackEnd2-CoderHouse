export const successResponse = (res, data, message = "Éxito", status = 200) => {
    res.status(status).json({
        status: "success",
        message,
    });
};

export const errorResponse = (res, message = "Error", status = 500) => {
    console.error("Error:", message);
    res.status(status).json({
        status: "error",
        message,
    });
};
