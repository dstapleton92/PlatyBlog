import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo'; // step 1
import NewPostViewControl from '../newpost/newpost.vc';
import SinglePostViewControl from '../singlepost/singlepost.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context = {
        posts: <Array<models.IBlogPost>>[],
        composeView: NewPostViewControl,
        friends: ['tyler', 'hillary']
    };
    
    constructor(private postRepo: PostRepository) { // step 3
        super();
    }
    
    navigatedTo(): void {
        console.log('navigated to!');
        this.postRepo.getAllPosts().then((success) => {
            console.log('get posts returned!');
            console.log(success);
            this.context.posts = success;
        }, (err) => {
            console.log('something went wrong!');
            console.log(err);
        });
    }
    
    goToCompose(): void {
        this.navigator.navigate(NewPostViewControl);
    }
    
    readMore(postId: string): void {
        this.navigator.navigate(SinglePostViewControl, {
            parameters: {
                someid: postId
            }
        });
    }
}

register.viewControl('home-vc', HomeViewControl, [PostRepository]); // step 2
