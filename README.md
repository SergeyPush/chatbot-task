## Installation

In order to run application perform following steps:

```bash
$ npm install
```

Create database:

```bash
$ docker compose up
```

All necessary environement variables are stored in file `development.env`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Routes

### Create image

```
/upload/dog/image
```

Requires two obligatory parameters: `width` and `height` with type `number`

Example:

```
POST http://localhost:3000/upload/dog/image
```

Body:

```json
{
  "width": 640,
  "height": 480
}
```

### Search images

```
localhost:3000/list/dog/images
```

Accepts two optional parameters: `width` and `height`

Examples:

```bash
# Retreives All images from database
GET localhost:3000/list/dog/images
```

```bash
# Retreives all images with width 640px
GET localhost:3000/list/dog/images?width=640
```

```bash
# Retreives all images with width 640px and height 480
GET localhost:3000/list/dog/images?width=640&height=480
```

### Serving images

All stored images can be opened from host's `/public` folder

Example:

```
http://localhost:3000/public/dd7513ef-2032-4c0e-bb4e-f076115bc9bf.jpg
```
