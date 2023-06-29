
export function firebaseErrorMapper(code: string) {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Bu email adresi zaten kullanımda.'
    case 'auth/user-not-found':
      return 'Bu email adresi ile kayıtlı bir kullanıcı bulunamadı.'
    case 'auth/wrong-password':
      return 'Hatalı bir şifre girdiniz.'
    default:
      return 'Bir hata oluştu, eğer bu hatayı almaya devam ederseniz lütfen bizimle iletişime geçin.'
  }
}