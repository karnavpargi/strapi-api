module.exports = ({ env }) => ({
    email: {
        provider: 'nodemailer',
        providerOptions: {
            host: env('MAIL_HOST', 'smtp-mail.outlook.com'),
            port: +env('MAIL_PORT', 587),
            auth: {
                user: env('MAIL_USERNAME', 'bytes-test@outlook.com'),
                pass: env('MAIL_PASSWORD', 'Bytes@123'),
            },
            ignoreTLS: true,
        },
    },
});