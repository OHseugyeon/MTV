from django.shortcuts import redirect, render
from .forms import PostModelForm
from .models import Post
from django.core.paginator import Paginator

def home(request):
    posts = Post.objects.all().order_by('-created_at')
    paginator = Paginator(posts, 5)
    pagnum = request.GET.get('page')
    posts = paginator.get_page(pagnum)
    # return render(request, 'post_list.html', {'posts':posts})
    return render(request, 'index.html', {'posts' : posts})

def create(request):
    if request.method == 'POST' or request.method == 'FILES':    
        form = PostModelForm(request.POST, request.FILES) 
        if form.is_valid(): 
            unfinished_form = form.save(commit=False)
            unfinished_form.save() #form 데이터를 db에 저장
            return redirect('home')
    else:
        form = PostModelForm() 
    return render(request, 'form_create.html', {'form':form})

