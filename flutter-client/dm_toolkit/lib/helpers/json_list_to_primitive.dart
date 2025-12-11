List<T> jsonListToPrimitive<T>(dynamic json) {
  return (json as List<dynamic>).cast<T>();
}