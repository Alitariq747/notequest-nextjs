
# NoteQuest - Your Personal Note-Taking App

NoteQuest is a simple and efficient note-taking application built with Next.js, Tailwind CSS, and MongoDB. It offers a user-friendly interface for creating, managing, and organizing your notes.


## Features

- **User Authentication**: Secure user registration and login powered by Clerk.
- **Responsive Design**: A mobile-friendly design ensures your notes are accessible on all devices.
- **Create Notes**: Easily create and save notes with a title and content.
- **Edit and Update Notes**: Modify your notes whenever you need to.
- **Delete Notes**: Remove notes you no longer need.
- **View Individual Notes**: Click on a note to see its details.
- **Database Integration**: Store your notes in MongoDB.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/NoteQuest.git
   cd NoteQuest
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Clerk Authentication**:

   - Visit [Clerk.dev](https://clerk.dev) to set up your Clerk account and obtain your API credentials.
   - Add your Clerk credentials in the `.env.local` file:

     ```plaintext
     NEXT_PUBLIC_CLERK_FRONTEND_API=https://api.clerk.dev/your-front-end-api
     CLERK_API_KEY=your-api-key
     ```

4. **Set Up MongoDB**:

   - You will need a MongoDB database to store your notes. You can use a local MongoDB instance or a cloud-based service.
   - Add your MongoDB connection string in the `.env.local` file:

     ```plaintext
     MONGODB_URI=your-mongodb-connection-string
     ```

5. **Start the Development Server**:

   ```bash
   npm run dev
   ```

6. **Open Your Browser**:

   Visit `http://localhost:3000` to access NoteQuest.

## Contributing

We welcome contributions from the community! If you'd like to improve NoteQuest, please follow these steps:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.



## Acknowledgments

- Next.js: An excellent React framework for building web applications.
- Tailwind CSS: A utility-first CSS framework for rapid web development.
- Clerk: A powerful authentication and user management platform.
- MongoDB: A flexible and scalable NoSQL database for data storage.
- NextUi: An awesome component library optimized for Nextjs and tailwind

## Contact

If you have any questions, feel free to contact us:

- Email: alitariq596@gmail.com
- Twitter: @alitariq121

Happy note-taking with NoteQuest!
```

