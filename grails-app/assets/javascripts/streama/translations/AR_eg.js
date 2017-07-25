//= wrapped
/**
 * Created by antonia on 14/05/16.
 */
angular.module('streama.translations').config(function ($translateProvider) {
	$translateProvider.translations('ar', {
		LOGIN: {
			TITLE: 'ادخل يا معلم',
			USERNAME: 'الاسم',
			PASSWORD: 'اللي بالي بالك',
			FIRST_TIME_HINT: 'First time logging in? Try \'admin\' for both fields.',
			SUBMIT: 'يلا بينا'
		},
		DASHBOARD: {
			TITLE: 'Dashboard',
			RECOMMENDATIONS: 'شوف دا يا برنس',
			NEW_RELEASES: 'جديد',
			CONTINUE_WATCHING: 'مش هنكمل دول؟',
			DISCOVER_SHOWS: 'وريني حاجه علي ذوقك',
			DISCOVER_MOVIES: 'وريني حاجه علي ذوقك',
			DISCOVER_OTHER_VIDEOS: 'وريني حاجه علي ذوقك',
			SORT: 'رتب:',
			SEARCH_BY_NAME: 'شوف هنا...',
			FILTER_BY_TAG: 'فلتر...',
			BROWSE_GENRES: 'وريني',
			LOOKING_AT_GENRE: 'You\'re looking at the genre:',
			MARK_COMPLETED: 'شفته قبل كده يا برنس',
			NO_TVSHOWS_FOUND: 'صحرا',
			NO_MOVIES_FOUND: 'صحرا'
		},
		VIDEO: {
			RELEASED: 'طلع',
			IMDB: 'اي ام دي بي',
			RATING: 'رأيك ايه',
			VOTES: 'اصوات',
			OVERVIEW: 'خد فكؤة',
			GENRE: 'النوع',
			TRAILER: 'لقطات',
			SEASON: 'موسم',
      NO_SUBTITLE: 'مع نفسك مفيش ترجمه'
		},

		MESSAGES: {
			SHARE_SOCKET: 'By creating a new session you will be redirected back to this player, but this time you will have a unique session ID in the url. Share this with your friends to have a synchronized watching experience with them!',
			FILE_MISSING: 'There is a problem with this content. It seems you removed the associated video file from it.',
			CODEC_PROBLEM: 'There seems to be a problem adding the video-file to the player. This is most likely due to a codec-problem. Try converting it to a compatible HTML5 codec, remove the currently attached file and re-add it. If the codecs are fine, check the error log of the server and the base URL in the settings.',
			WRONG_BASEPATH: 'You video get\'s included using the wrong Base Path, but you are browsing the page via "{{basePath}}". Make sure you set the correct Base Path in the settings and that you are using it to browse the application.',
			FILE_IN_FS_NOT_FOUND: 'Your video cannot be found in any of the locations available to the application. Please check your settings and your file system to make sure that the files are accessible by the application.'
		},
		MANAGE_CONTENT: 'Manage Content',
		ADMIN: 'Admin',
		HELP: 'Help',
		HELP_FAQ: 'HELP / FAQ',
		PROFILE_SETTINGS: 'Profile Settings',
		LOGOUT: 'Logout',
		CHANGE_PASSWORD: 'Change Password',
		LANGUAGE_ar: 'Masry',
		LANGUAGE_en: 'English',
		LANGUAGE_de: 'German',
		LANGUAGE_fr: 'French',
		LANGUAGE_es: 'Spanish',
		LANGUAGE_kr: 'Korean',
		LANGUAGE_nl: 'Dutch',
		LANGUAGE_pt: 'Portuguese',
    LANGUAGE_ja: 'Japanese',
    LANGUAGE_it: 'Italian',
		LANGUAGE_da: 'Danish',
		PROFIlE: {
			USERNAME: 'اسمك',
			FULL_NAME: 'الاسم كامل',
			LANGUAGE: 'اللغة',
			PAUSE_ON_CLICK: 'وقف الفيديو بكليك',
			FAVORITE_GENRES: 'بتحب ايه',
			SAVE: 'تمام كده',
			PASS: 'اللي بالي بالك',
			OLD_PASS: 'الباسورد القديمة',
			NEW_PASS: 'الباسورد الجديدة',
			NEW_PASS_PLACEHOLDER: '6 حروف اقل حاجه',
			REPEAT_PASS: 'معلش اكد تاني يا برنس',
			PASS_ERROR_EMPTY: 'ينفع باسورد فاضية بذمتك!',
			PASS_ERROR_LENGTH: '6 حروف اقل حاجه عندس سا برنس',
			PASS_ERROR_REPEAT: 'الباسوردس مختلفين',
			SAVE_PASS: 'تمام'
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: 'جديد لانج',
			OLDEST_ADDED: 'موجود من زمان',
			NEWEST_RELEASED: 'لسا نازل',
			OLDEST_RELEASED: 'نازل من زمان',
			NEWEST_AIRED: 'لسا شايفه',
			OLDEST_AIRED: 'شفته قبل كده'
		},

		FAQ: {
			UPLOAD_VIDEO: {
				TITLE: 'How can I upload a video?',
				TEXT: "You can upload videos by going to Manage Content menu. Choose if you want to upload a Movie, TV show or Other video. Click the relevant sub-menu option" +
				" on the vertical navigation bar on the left side of the screen. You can upload a video by clicking the Create New Movie/TV Show/Other Video button or by typing" +
				" the name of the video you want to upload to the search bar and selecting the relevant movie from search results. After that, you can choose to fill in the video's" +
				" information either manually or loading its information from TheMovieDB. After that, you can upload the video and subtitle files by clicking Manage Files button."
			},
			DELETE_VIDEO: {
				TITLE: 'How can I delete a video?',
				TEXT: "You can delete a video by going to the video's information page and clicking Manage Files and selecting the red trash can icon. Clicking Edit Movie and selecting" +
				" Delete Movie is another way to do it. You can also use the File Manager which is in the Manage Content menu. You can see all the files you have uploaded there. Click" +
				" the red trash can icon to delete a file."
			},
			VIDEO_FORMATS: {
				TITLE: 'Which video formats are supported?',
				TEXT: "Streama supports currently only the video file formats supported by HTML5 player. You can test if your video file is HTML5 player compatible by dragging and dropping" +
				" your file to an empty tab on your browser."
			},
			SUBTITLES: {
				TITLE: 'How can I add subtitles to videos?',
				TEXT: "You can add subtitles to videos by clicking Manage Files button which is in the video's information page. You can drag and drop subtitle files there." +
				" Previously you had to manually convert them into a compatible file format, but not anymore! Now the application handles that for you."
			},
			INVITE_USERS: {
				TITLE: 'How can I invite friends to watch my hosted videos?',
				TEXT:"You can share your videos with your friends by inviting them to use your hosted Streama. Go to the Users menu and click Invite User button. Fill in the invite form and" +
				" select the invitee's role(s). Users with the role Admin can edit Users & Settings. Users with the role Content Manager can edit content. Your friend will be notified about" +
				" the invitation via email. You can also share video sessions with your friends by clicking the video player's Share button and linking the session URL to them."
			},
			BASE_URL: {
				TITLE: "What's the base URL and how should I configure it?",
				TEXT: "The Base-URL is used for the videos and the link in the invitation-email."
			},
			NOTIFICATIONS: {
				TITLE: "What are notifications?",
				TEXT: "You can notify your invited friends about uploaded videos by sending them notification messages. You can send them by adding them your notification queue by clicking" +
				" Add Notification button which is in your video's information page and going to the Notifications menu and clicking Send Queue button."
			},
			VIDEO_PLAYER_SHORTCUTS: {
				TITLE: "Does the video player have shortcut keys?",
				TEXT: "Yes. Pause/unpause: space. Manage volume: arrow keys up or down. Skip video forward/backward: arrow keys left or right. Long skip:" +
				" control + arrow keys left or right. Fullscreen on/off: alt + enter. Subtitles on/off: S, Mute: M, Return to previous" +
				" screen: delete or backspace."
			},
			FAVORITE_GENRES: {
				TITLE: "How do user's favorite genres affect Streama?",
				TEXT: "Coming soon..."
			},
			USEFUL_LINKS: {
				TITLE: "Useful links",
				TEXT: "Coming soon..."
			}
		}
	});
});
