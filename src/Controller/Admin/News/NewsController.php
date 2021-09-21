<?php

namespace App\Controller\Admin\News;

use App\Entity\News;
use App\Form\NewsType;
use App\Repository\NewsRepository;
use App\Controller\Admin\MainController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/news")
 */
class NewsController extends MainController
{
    /**
     * @Route("/", name="news_index", methods={"GET"})
     */
    public function index(NewsRepository $newsRepository, Request $request): Response
    {
        $newsKnp = $this->paginator->paginate(
            $newsRepository->findAllStatusQuery(),
            $request->query->getInt('page', 1),
                7);

        return $this->render('admin/news/index.html.twig', [
            'newsKnp' => $newsKnp,
        ]);
    }

    /**
     * @Route("/new", name="news_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $news = new News();
        $form = $this->createForm(NewsType::class, $news);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //check if youtube link has 'watch?' parameter and replace with 'embed?'
            $news = $this->checkLinks($news);

            $news->setCreatedBy($this->getUser()->getUsername());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($news);
            $entityManager->flush();

            return $this->redirectToRoute('news_index');
        }

        return $this->render('admin/news/new.html.twig', [
            'news' => $news,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="news_show", methods={"GET"})
     */
    public function show(News $news): Response
    {
        return $this->render('admin/news/show.html.twig', [
            'news' => $news,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="news_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, News $news): Response
    {
        $form = $this->createForm(NewsType::class, $news);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $news = $this->checkLinks($news);

            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('news_index');
        }

        return $this->render('admin/news/edit.html.twig', [
            'news' => $news,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="news_delete", methods={"POST"})
     */
    public function delete(Request $request, News $news): Response
    {
        if ($this->isCsrfTokenValid('delete'.$news->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($news);
            $entityManager->flush();
        }

        return $this->redirectToRoute('news_index');
    }

    private function checkLinks($news){
        //check hyperlink extension if it's top domain
        $news = $this->checkDefault($news);

        //check link extension if it's image
        $news = $this->checkPhoto($news);

        //check link extension if it's Youtube embed link
        $news = $this->checkYoutubeLink($news);

        return $news;
    }

    private function checkDefault($news){

        if($news->getType() == 0){
            // concatanate link with "/" to prevent home routes to give strpos null
            $link = $news->getLink();
            
            if(!strpos($link, "http")){
                $news->setLink("https://$link");
            }
            
            $link = $news->getLink()."/";
            $sublink = substr_replace($link, "", 0, 8);
         
            $link = substr($sublink, 0, strpos($sublink, "/"));
            
            $ext = [".ro", ".com"];
            $flag = 0;
            for($i=0; $i < sizeof($ext); $i++) {
                if(strpos($link, $ext[$i]) == strlen($link) - strlen($ext[$i])){
                    $flag = 1;
                }
            }
            if(!$flag){ 
                $news->setLink(NULL);
            }
            
            
        }
        return $news;
    }


    private function checkPhoto($news){

        if($news->getType() == 2){
            $link = $news->getLink();
            $ext = [".jpg", ".jpeg", ".png", ".gif", ".svg"];
            $flag = 0;
            for($i=0; $i < sizeof($ext); $i++) {
                if(strpos($link, $ext[$i]) == strlen($link) - strlen($ext[$i])){
                    $flag = 1;
                }
            }
            if(!$flag){ 
                $news->setLink(NULL);
            }
            
        }
        return $news;
    }

    private function checkYoutubeLink($news){
        if($news->getType() == 1){
            $link = $news->getLink();
            $flag = 0;
            if(strpos($link, "<iframe ") == 0 && strpos($link, "</iframe>") == strlen($link) - 9){ 
                $flag = 1;
            }
            if(!$flag){ 
                $news->setLink(NULL);
            }
            
        }
        return $news;
    }
}
