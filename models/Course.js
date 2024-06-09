import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter Course Title"],
    },
    description: {
        type: String,
        required: [true, "Please enter Course Description"],
    },
    lectures: [
        {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            video: {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            },
        }
    ],
    poster: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    views: {
        type: Number,
        default: 0,
    },
    numOfVideos: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: [true, "Enter Course Creator Name"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Course = mongoose.model('Course', schema);
