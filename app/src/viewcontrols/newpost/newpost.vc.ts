import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo';
import HomeViewControl from '../home/home.vc';

export default class NewPostViewControl extends BaseViewControl {
    templateString: string = require('./newpost.vc.html');

    context = {
        title: '',
        author: '',
        content: ''
    };
    
    constructor(private postRepo: PostRepository) {
        super();
    }
    
    submit(): void {
        console.log('submitting blog post!');
        let blogPost: models.IBlogPost = {
            title: this.context.title,
            author: this.context.author,
            content: this.context.content
        };
        this.postRepo.submitPost(blogPost).then((success) => {
            console.log(success);
            this.navigator.navigate(HomeViewControl);
        }, (err) => {
            console.log(err);
        });
    }
}

register.viewControl('newpost-vc', NewPostViewControl, [PostRepository]);
