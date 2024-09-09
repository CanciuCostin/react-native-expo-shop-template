
module.exports = {
    useTranslation: () => ({
      t: key => key,
      i18n: {
        changeLanguage: jest.fn().mockResolvedValue('en'),
        language: 'en',
      },
    }),
  }