# Sử dụng một hình ảnh đáng tin cậy của Node.js
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép tất cả các tệp nguồn vào thư mục làm việc
COPY . .

# prisma generate
RUN npx prisma generate

# Xây dựng ứng dụng Next.js
RUN npm run build

# Mở cổng 3000 để truy cập ứng dụng
EXPOSE 3000

# Chạy ứng dụng khi container được khởi chạy
CMD ["npm", "start"]
